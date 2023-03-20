import HomePage from "./home";
import { SmoothScrollProvider } from "../contexts/SmoothScroll";
export default function Home() {
  return (
    <SmoothScrollProvider options={{smooth: true}}>
      <HomePage />
    </SmoothScrollProvider>
  );
}