import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className=" border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
      <p className=" text-sm ">{title}</p>
    </button>
  );
};

export default Button;
