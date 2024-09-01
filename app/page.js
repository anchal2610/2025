import FifthPage from "@/components/fifthPage";
import FirstPage from "@/components/firstPage";
import FourthPage from "@/components/fourthPage";
import SecondPage from "@/components/secondPage";
import ThirdPage from "@/components/thirdPage";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </main>
  );
}
