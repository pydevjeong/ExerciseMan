import { useForm } from "react-hook-form";

function Login({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  },
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Id">아이디</label>
      <input
        id="Id"
        type="text"
        placeholder="아이디를 입력해주세여"
        aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
        {...register("id", {
          required: "아이디은 필수 입력입니다."
        })}
      />
      {errors.email && <small role="alert">{errors.email.message}</small>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="****************"
        aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "6자리 이상 비밀번호를 사용하세요.",
          },
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}

export default Login