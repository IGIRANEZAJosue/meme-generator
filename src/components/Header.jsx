function Header() {
   return (
      <Header className="flex justify-between items-center bg-gradient-to-r from-[#672280] to-[#A626D3] p-6 w-full text-white">
         <div className="flex items-end gap-6">
            <img className="size-10" src="/Troll Face.png" alt="" />
            <h1 className="font-bold text-3xl">Meme generator</h1>
         </div>

         <h3 className="font-medium text-xl">React Course - Project 3</h3>
      </Header>
   );
}

export default Header;
