import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState, toDoSelector } from "../atoms";

interface ICategory {
  [key: string]: [];
}

function CategoryAdd() {
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();
  const onValid = ({ category }: ICategory) => {
    // 모르겠다.....다른것 부터 하자 ㅜㅜ
    console.log("추가를 시키고 싶습니다.");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <h1>Category</h1>
        <input
          {...register}
          type="text"
          placeholder="추가기능은 구현을 못했습니다.."
        />
        <button>+</button>
      </form>
    </>
  );
}

export default CategoryAdd;
