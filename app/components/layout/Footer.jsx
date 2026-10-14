import Image from "next/image";
import { heroContent, navLinks } from "../../data/content";
import Logo from "../ui/Logo";
export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-line bg-surface py-14 transition-colors duration-500"
    >
      <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Image
            src="/skyrise-logo.webp"
            className="w-[140px] md:w-[180px]"
            width={180}
            height={58}
            alt="Skyrise Logo"
          />
          <p className="mt-5 max-w-xl leading-relaxed text-soft">
            {heroContent.text}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-soft transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div>
            <ul>
              <li class="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="26"
                  color="#9c9c9c"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  ></path>
                </svg>
                <a
                  target="_blank"
                  class="text-soft text-[17px]"
                  href="tel:+919312148849"
                >
                  +91-9312-1488-49
                </a>
              </li>
              <li class="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="26"
                  color="#9c9c9c"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  ></path>
                </svg>
                <a
                  target="_blank"
                  class="text-soft text-[17px]"
                  href="tel:+917291994355"
                >
                  {" "}
                  +91-7291-9943-55
                </a>
              </li>
              <li class="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="26"
                  color="#9c9c9c"
                  class="mr-4"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  ></path>
                </svg>
                <a
                  target="_blank"
                  class="text-soft text-[17px]"
                  href="mailto:skyrise30@gmail.com"
                >
                  skyrise30@gmail.com
                </a>
              </li>
              <li class="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  color="#9c9c9c"
                  width="36"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
                <a class="text-soft text-[17px]" href="">
                  C 373 Ground Floor DDA Flats jasola vihar Sarita Vihar , New
                  Delhi 110025
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-page mt-12 border-t border-line pt-6 text-sm text-soft">
        © 2026 Skyrise. Registered in Delhi.
      </div>
    </footer>
  );
}
