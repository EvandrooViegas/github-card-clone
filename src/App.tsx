import BackdropShadow from "./components/BackdropShadow";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <BackdropShadow color="#45b33b" size={400}>
        <Card>
          <div className="w-[90vw] h-[30vh] backdrop-blur-3xl bg-black/60 p-4">Hello</div>
        </Card>
      </BackdropShadow>
    </div>
  )
}
