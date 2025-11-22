
import { z } from "zod";


export const checkoutSchema = z.object({
  fullName: z.string().min(3, "নাম অবশ্যই দিতে হবে"),
  phone: z.string().min(11, "ফোন নম্বর সঠিক নয়"),
  altPhone: z.string().optional(),
  email: z.string().email().optional(),
  division: z.string().min(1, "বিভাগ সিলেক্ট করুন"),
  district: z.string().min(1, "জেলা সিলেক্ট করুন"),
  upazila: z.string().min(1, "উপজেলা সিলেক্ট করুন"),
  address: z.string().min(5, "সম্পূর্ণ ঠিকানা প্রয়োজন"),
  paymentMethod: z.enum(["cod", "bkash"])
});

 interface LocationType {
  [division: string]: {
    [district: string]: string[];
  };
}

export const LOCATION : LocationType = {
  ঢাকা: {
    ঢাকা: ["উত্তরা", "মিরপুর", "ডেমরা"],
    গাজীপুর: ["কালিয়াকৈর", "শ্রীপুর"],
  },
  চট্টগ্রাম: {
    চট্টগ্রাম: ["পটিয়া", "বন্দর"],
    কুমিল্লা: ["ব্রাহ্মণপাড়া", "দেবীদ্বার"],
  },
} as const;


export type CheckoutFormType = z.infer<typeof checkoutSchema>;