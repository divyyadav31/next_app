import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

const ShadInputOTP = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">Input OTP</span>
      <InputOTP
        maxLength={6}
        className="bg-green-300 p-2 outline outline-slate-500"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default ShadInputOTP;
