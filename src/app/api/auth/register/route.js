import connect from "@/utils/db";

export const POST = async (req) => {
  const { email, password, name } = await req.json();
  await connect();

  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    return new NextResponse("User has been created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
