const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-radial from-[#EE6222] from-40% to-[#883813]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
        {children}
      </div>
    </div>
  );
};
export default authLayout;
