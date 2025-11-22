import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LOCATION } from "@/utils/ZodSchema";

// sample image uploaded by user (local path will be transformed to URL by the platform)
const SAMPLE_IMG = "/mnt/data/52f76109-262b-4846-a4b6-a19ba10bd196.png";

// ----------------------
// Small location dataset (division -> district -> upazila)
// In real app you would fetch these from an API
// ----------------------




// ----------------------
// Zod schema
// ----------------------
const checkoutSchema = z.object({
  name: z.string().min(3, "নাম অবশ্যই তিন অক্ষর বা বেশি হতে হবে"),
  phone: z
    .string()
    .regex(/^01[0-9]{9}$/, "সঠিক মোবাইল নম্বর লিখুন (e.g. 01XXXXXXXXX)"),
  emergencyPhone: z.string().optional(),
  email: z.string().email("ইমেইল সঠিক নয়").optional(),
  division: z.string().min(1, "বিভাগ সিলেক্ট করুন"),
  district: z.string().min(1, "জেলা সিলেক্ট করুন"),
  upazila: z.string().min(1, "থানা/উপজেলা সিলেক্ট করুন"),
  address: z.string().min(5, "ঠিকানা সংক্ষিপ্ত—কমপক্ষে ৫ অক্ষর"),
payment: z.enum(["cod", "bkash"], {
  message: "পেমেন্ট সিলেক্ট করুন",
}),

  bkashNumber: z.string().optional(),
  otp: z.string().optional(),
}).superRefine((val, ctx) => {
  // if bkash selected, bkashNumber required and must match pattern
  if (val.payment === "bkash") {
    if (!val.bkashNumber || !/^01[0-9]{9}$/.test(val.bkashNumber)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "bKash নম্বর অবশ্যই সঠিক মোবাইল ফরম্যাটে দিতে হবে",
        path: ["bkashNumber"],
      });
    }
    if (!val.otp || val.otp.length !== 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "OTP ৬ সংখ্যার হতে হবে",
        path: ["otp"],
      });
    }
  }
});

export default function CheckoutFormWithBKashAndLocation() {
    
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(checkoutSchema),
        defaultValues: { payment: "cod" },
    });
    
    const payment = watch("payment");
    const division = watch("division");
    const district = watch("district");
    
    // for dynamic selects
    const [districts, setDistricts] = useState<string[]>([]);
     const [upazilas, setUpazilas] = useState<string[]>([]);
     const [mockOtp, setMockOtp] = useState<string | null>(null);


  // simple OTP mock
  const [otpSent, setOtpSent] = useState(false);
 
  const [bkashVerified, setBkashVerified] = useState(false);

  useEffect(() => {
    // when division changes, update districts
    if (division && LOCATION[division]) {
      setDistricts(Object.keys(LOCATION[division]));
    } else {
      setDistricts([]);
    }
    // reset district/upazila when division changes
    setValue("district", "");
    setValue("upazila", "");
    setUpazilas([]);
  }, [division, setValue]);

  useEffect(() => {
    // when district changes, update upazilas
    if (division && district && LOCATION[division] && LOCATION[division][district]) {
      setUpazilas(LOCATION[division][district]);
    } else {
      setUpazilas([]);
    }
    setValue("upazila", "");
  }, [district, division, setValue]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data : any ) => {
    if (data.payment === "bkash" && !bkashVerified) {
      alert("দয়া করে প্রথমে bKash ভেরিফাই করুন (OTP) ");
      return;
    }

    console.log("SUBMITTING ORDER:", data);
    alert("অর্ডার সাবমিট হয়েছে। কনসোল চেক করুন।");
  };

  // simulate sending OTP
  const sendOtp = () => {
    const num = watch("bkashNumber");
    if (!num || !/^01[0-9]{9}$/.test(num)) {
      alert("প্রথমে সঠিক bKash নম্বর দিন (01XXXXXXXXX)");
      return;
    }
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    setMockOtp(otp);
    setOtpSent(true);
    setBkashVerified(false);
    // in real app you'd call API and not alert the otp
    alert(`OTP sent (mock): ${otp}`);
  };

  const verifyOtp = () => {
    const entered = watch("otp");
    if (!entered) {
      alert("OTP লিখুন");
      return;
    }
    if (entered === mockOtp) {
      setBkashVerified(true);
      alert("bKash নম্বর ভেরিফায়েড হয়েছে");
    } else {
      setBkashVerified(false);
      alert("ভুল OTP");
    }
  };

  return (
    <div className="w-full bg-gray-50 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4"
      >
        {/* LEFT - Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">ডেলিভারি ঠিকানা</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* name */}
            <div>
              <label className="block font-medium">নাম *</label>
              <input
                {...register("name")}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="আপনার নাম লিখুন"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* phone */}
            <div>
              <label className="block font-medium">ফোন *</label>
              <input
                {...register("phone")}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="01XXXXXXXXX"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* emergency */}
            <div>
              <label className="block font-medium">জরুরি ফোন (ঐচ্ছিক)</label>
              <input
                {...register("emergencyPhone")}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="01XXXXXXXXX"
              />
            </div>

            {/* email */}
            <div>
              <label className="block font-medium">ইমেইল (ঐচ্ছিক)</label>
              <input
                {...register("email")}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* division */}
            <div>
              <label className="block font-medium">বিভাগ *</label>
              <select
                {...register("division")}
                className="mt-1 w-full border rounded px-3 py-2"
              >
                <option value="">সিলেক্ট করুন</option>
                {Object.keys(LOCATION).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.division && (
                <p className="text-red-600 text-sm mt-1">{errors.division.message}</p>
              )}
            </div>

            {/* district */}
            <div>
              <label className="block font-medium">জেলা *</label>
              <select
                {...register("district")}
                className="mt-1 w-full border rounded px-3 py-2"
                disabled={districts.length === 0}
              >
                <option value="">সিলেক্ট করুন</option>
                {districts.map((dd) => (
                  <option key={dd} value={dd}>
                    {dd}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className="text-red-600 text-sm mt-1">{errors.district.message}</p>
              )}
            </div>

            {/* upazila */}
            <div>
              <label className="block font-medium">থানা/উপজেলা *</label>
              <select
                {...register("upazila")}
                className="mt-1 w-full border rounded px-3 py-2"
                disabled={upazilas.length === 0}
              >
                <option value="">সিলেক্ট করুন</option>
                {upazilas.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
              {errors.upazila && (
                <p className="text-red-600 text-sm mt-1">{errors.upazila.message}</p>
              )}
            </div>

            {/* address full width */}
            <div className="md:col-span-2">
              <label className="block font-medium">ঠিকানা *</label>
              <textarea
                {...register("address")}
                rows={4}
                className="mt-1 w-full border rounded px-3 py-2"
                placeholder="বাড়ি/ফ্ল্যাট, রোড, পাড়া-মহল্লা"
              />
              {errors.address && (
                <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT - summary + payment */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-4">
            <img src={SAMPLE_IMG} alt="product" className="w-16 h-16 object-cover rounded" />
            <div>
              <div className="font-medium">MCQ Practice Book</div>
              <div className="text-sm text-gray-500">Talent Stationery</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <span>টোটাল</span>
              <span>৳195.00</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>ছাড়</span>
              <span>- ৳15.00</span>
            </div>
          </div>

          <div className="border border-dashed p-3 rounded mb-4 text-green-700">
            আর মাত্র ৳১,৩১৯ টাকা অর্ডার করলে শিপিং চার্জ ফ্রি
          </div>

          <div className="mb-4">
            <label className="font-medium block mb-2">পেমেন্ট মেথড *</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 border p-3 rounded">
                <input type="radio" value="cod" {...register("payment")} />
                <span>CASH ON DELIVERY</span>
              </label>

              <label className="flex items-center gap-3 border p-3 rounded">
                <input type="radio" value="bkash" {...register("payment")} />
                <span>bKash</span>
              </label>
            </div>
            {errors.payment && (
              <p className="text-red-600 text-sm mt-1">{errors.payment.message}</p>
            )}
          </div>

          {/* bKash block - only when selected */}
          {payment === "bkash" && (
            <div className="mb-4 border p-4 rounded">
              <label className="font-medium block">bKash নম্বর</label>
              <input
                {...register("bkashNumber")}
                placeholder="01XXXXXXXXX"
                className="mt-1 w-full border rounded px-3 py-2"
              />
              {errors.bkashNumber && (
                <p className="text-red-600 text-sm mt-1">{errors.bkashNumber.message}</p>
              )}

              <div className="flex gap-2 mt-3">
                <button type="button" onClick={sendOtp} className="px-3 py-1 bg-blue-600 text-white rounded">
                  Send OTP
                </button>
                <div className="flex-1">
                  <input
                    {...register("otp")}
                    placeholder="Enter OTP"
                    className="mt-1 w-full border rounded px-3 py-2"
                  />
                  <div className="flex gap-2 mt-2">
                    <button type="button" onClick={verifyOtp} className="px-3 py-2 bg-green-600 text-white rounded">
                      Verify OTP
                    </button>
                    {otpSent && !bkashVerified && <span className="text-sm text-gray-600 self-center">OTP sent — check alert (mock)</span>}
                    {bkashVerified && <span className="text-sm text-green-700">Verified ✅</span>}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="font-medium block mb-2">কুপন</label>
            <div className="flex gap-2">
              <input className="flex-1 border px-3 py-2 rounded" placeholder="কুপন কোড" />
              <button type="button" className="px-2 bg-indigo-600 text-white rounded">APPLY</button>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-green-700 text-lg mb-4">
            <span>সর্বমোট:</span>
            <span>৳220.00</span>
          </div>

          <button type="submit" className="w-full py-3 bg-pink-600 text-white rounded">
            অর্ডার করুন
          </button>
        </div>
      </form>
    </div>
  );
}


// ---- Zod Types Added ----
