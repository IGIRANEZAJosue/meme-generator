import Header from "./components/Header";

export default function App() {
   return (
      <div className="flex justify-center mx-auto px-32 py-24 font-karla container">
         <div className="flex flex-col items-center w-full">
            <Header />
            <h1>Hello world</h1>
         </div>
      </div>
   );
}
