import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Small Buttons */}
      <div className="flex gap-4 mt-2">
        <Button title="Small - Rounded Sm" styles="text-sm rounded-sm" />
        <Button title="Small - Rounded Md" styles="text-sm rounded-md" />
        <Button title="Small - Rounded Full" styles="text-sm rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4 mt-2">
        <Button title="Medium - Rounded Sm" styles="text-md rounded-sm" />
        <Button title="Medium - Rounded Md" styles="text-md rounded-md" />
        <Button title="Medium - Rounded Full" styles="text-md rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4 mt-2">
        <Button title="Large - Rounded Sm" styles="text-lg rounded-sm" />
        <Button title="Large - Rounded Md" styles="text-lg rounded-md" />
        <Button title="Large - Rounded Full" styles="text-lg rounded-full" />
      </div>
    </div>
  );
};
export default Landing;
