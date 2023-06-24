const fs = require("fs");
const path = require("path");
const yml = require("yaml");

const numberRegex = /^\d+$/;
const data = yml.parse(
  fs.readFileSync(path.join(__dirname, "./data.yaml"), { encoding: "utf-8" })
)
  .map(obj => {
    return Object.fromEntries(Object.entries(obj).flatMap(([key, val]) => {
      const result = [
        // 旧フォーマット用
        [key, val.toString()],
      ];

      if(key === "Day"){
        result.push(["date", Number(val)]);
      }else{
        result.push([key.toLowerCase(), numberRegex.test(val) ? Number(val) : val]);
      }

      return result;
    }))
  });

fs.writeFileSync(
  path.join(__dirname, "./dist/main.json"),
  JSON.stringify(
    data,
    undefined,
    "  ",
  ),
  {
    encoding: "utf-8",
  },
);
