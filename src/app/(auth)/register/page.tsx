import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[#262626] w-[50rem] rounded-lg p-8">
        <div className="p-8 space-y-6">
          <h1 className="text-[3.5rem] font-semibold text-center text-white">
            Pendaftaran
          </h1>
          <div className="grid grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan Email Anda"
                className="px-4 py-2 rounded bg-gray-200 text-black text-[20px] "
              />
            </div>

            {/* Nama */}
            <div className="flex flex-col">
              <label htmlFor="nama" className="text-white mb-2 text-lg">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                placeholder="Masukkan Nama Anda"
                className="px-4 py-2 rounded bg-gray-200 text-black text-[20px]"
              />
            </div>

            {/* Umur */}
            <div className="flex flex-col">
              <label htmlFor="umur" className="text-white mb-2 text-lg">
                Umur
              </label>
              <input
                type="text"
                id="umur"
                placeholder="Masukkan Umur Anda"
                className="px-4 py-2 rounded bg-gray-200 text-black text-[20px]"
              />
            </div>

            {/* Role */}
            <div className="flex flex-col">
              <label htmlFor="role" className="text-white mb-2 text-lg">
                Role
              </label>
              <select
                id="role"
                className="px-4 py-2 rounded bg-gray-200 text-black text-[20px]"
              >
                <option value="karyawan">Karyawan</option>
                <option value="manajer">Manajer</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2 text-lg">
              Email
            </label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan Password Anda"
              className="px-4 py-2 rounded bg-gray-200 text-black text-[20px] "
            />
          </div>
          <Button
            variant={"default"}
            className="w-full text-[24px] p-6 text-black font-bold bg-[#E6E6D2] rounded-full"
          >
            Daftar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
