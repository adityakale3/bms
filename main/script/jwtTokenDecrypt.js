const jwt = require("jsonwebtoken");

const validateToken = async (token) => {
  // Validate Token user with input Value
  const decrypt = await jwt.verify(token, "Adityasecret");
  console.log("Dcrypt ", decrypt);
  req.user = {
    empcode: decrypt.empcode,
    name: decrypt.empname,
    band: decrypt.grade,
    dept: decrypt.dept,
    subdept: decrypt.subdept,
    ro: decrypt.ro,
    designation: decrypt.designation,
    plantcode: decrypt.plantcode,
    division: decrypt.division,
  };
};
