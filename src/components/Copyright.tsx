import GitHubIcon from "@mui/icons-material/GitHub";

// Update this component with your personal info
export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Copyright flex w-fit cursor-pointer flex-row items-center rounded-3xl bg-white/20 px-8 py-3 font-medium shadow-md backdrop-blur">
      <span className="flex select-none whitespace-nowrap text-xl text-gray-800 duration-100 md:text-lg dark:text-gray-100">
        <span className="hidden md:inline">Copyright</span>
        <span className="px-2"> © {currentYear} </span>
        <a
          className="hover:opacity-80"
          href="https://labs.jhuang.ca"
          target="_blank"
        >
          <span className="hidden md:inline">Jarrett Huang</span>
          <span className="inline md:hidden">JH</span>
        </a>
        <a
          className="flex items-center px-2 hover:opacity-80"
          href="https://github.com/jarretthuang/your-next-js-template"
          target="_blank"
        >
          <GitHubIcon fontSize="medium" />
        </a>
      </span>
    </div>
  );
}
