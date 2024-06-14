import JoinForm from "@/app/_components/auth/JoinForm";

const Join = () => {
  return (
    <div className="join h-dvh flex items-center justify-center">
      <div className="flex flex-col text-center flex-1">
        <h1 className="text-2xl mb-8 font-medium">회원가입</h1>
        <JoinForm />
      </div>
    </div>
  )
};

export default Join;
