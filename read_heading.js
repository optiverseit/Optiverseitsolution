import fs from 'fs';
const path = 'd:/Company/Company Portfolio/OptiverseITS/Optiverseitsolution/src/components/hero/OurServicesSection.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldBlock = `        <div className="mx-auto mb-10 max-w-3xl text-center">\r\n          <h2 className="bg-gradient-to-r from-cyan-100 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl">\r\n            IT Services in Nepal \u2014 Web Development, Digital Marketing &amp; Solutions\r\n          </h2>\r\n\r\n          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">\r\n            We offer comprehensive digital solutions to help your business thrive across Nepal and internationally \u2014\r\n            from high-performance custom websites to ROI-driven digital marketing strategies.\r\n          </p>\r\n        </div>`;

const newBlock = `        <div className="mx-auto mb-10 max-w-3xl text-center">\r\n          <h2 className="bg-gradient-to-r from-cyan-100 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl">\r\n            Our Services\r\n          </h2>\r\n        </div>`;

if (content.includes(oldBlock)) {
  content = content.replace(oldBlock, newBlock);
  fs.writeFileSync(path, content, 'utf8');
  console.log('SUCCESS: Heading updated and subtitle removed.');
} else {
  // Try with &amp; literal
  const idx = content.indexOf('IT Services in Nepal');
  console.log('Not found, showing surrounding context:');
  console.log(JSON.stringify(content.slice(idx - 10, idx + 200)));
}
