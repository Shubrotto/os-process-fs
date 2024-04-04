const os = require("os");
const fs = require("fs");

// console.log(os.cpus());
// console.log(os.platform());
// console.log(process.version);
// console.log(process.cpuUsage());

const data = {
  os: {
    "homeDirect" : os.homedir(),
    "platform": os.platform(),
    "cpuDetails": os.cpus(),
  },
  process: {
    
    "version": process.version,
    "cpuUsage": process.cpuUsage(),
  }
}
// const dataSystem = JSON.stringify(data)
fs.writeFileSync(
  "sys_data.json", JSON.stringify(data, null, 2));

const file = fs.readFileSync("sys_data.json", { encoding: "utf-8", flag: "r" });
const fileSystem = JSON.parse(file);
console.log(fileSystem);
