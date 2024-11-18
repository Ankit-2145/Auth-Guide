import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl text-green-500 ">Hello Auth</h1>
        <Button size="lg" variant="custom">
          Click here
        </Button>
      </div>
    </>
  );
}
