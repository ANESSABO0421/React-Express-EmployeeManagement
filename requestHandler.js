import createUserSchema from "./models/createUserSchema.js";

export async function SampleFunction() {
  console.log("haii");
}

// create User
export async function createUser(req, res) {
  // data send
  const { name, email, password, phoneNumber } = req.body;
  //   console.log(name, email, password, phoneNumber);

  try {
    const VerifyEmail = await createUserSchema.findOne({ email: email });
    if (VerifyEmail) {
      res.status(409).send("email already exitsed");
    }

    const createUser = await createUserSchema.create({
      name,
      email,
      password,
      phoneNumber,
    });

    if (createUser) {
      res.status(201).send({ data: createUser });
    } else {
      res.status(404).send("unable to create new user");
    }
  } catch (error) {
    res.status(500).send("server error");
  }
}

// Get User
export async function GetData(req, res) {
  try {
    const fetchData = await createUserSchema.find();
    if (fetchData) {
      res.status(201).send(fetchData);
    } else {
      res.status(404).send("failed to fetch the data");
    }
  } catch (error) {
    res.status(500).send("server error");
    console.log(error);
  }
}

// updateUser
export async function updateUser(req, res) {
  try {
    const updated = await createUserSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updated) {
      res.status(200).send(updated);
    } else {
      res.status(404).send("not updated");
    }
  } catch (error) {
    res.status(500).send("server error");
    console.log(error);
  }
}

// deleteUser

// Delete User
export async function deleteUser(req, res) {
  try {
    const deleted = await createUserSchema.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).send("user not found");
    }
    return res.status(200).send({ message: "user deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
}
