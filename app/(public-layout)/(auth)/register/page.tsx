import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[70vh]">
      <h3 className="text-2xl font-bold text-center">Register to OpenChat</h3>
        <SignIn />
    </div>
  );
}
