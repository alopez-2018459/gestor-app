import dbConnect from "@/app/utils/DatabaseConnection";
import Event from "@/app/models/event";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


// Connect to the database
dbConnect();

interface params extends Request {
  params: {
    id: string;
  };
}

export async function POST(request: NextRequest) {
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);
  console.log({ userLogged: session });

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "admin") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }
  try {
    // Parse the request body as JSON
    const json = await request.json();
    console.log({ DataRequest: json });

    // Check if a room with the same number and hotel already exists in the database
    const existingEvent = await Event.findOne({ name: json.name });
    if (existingEvent) {
      // If a room with the same number and hotel already exists, return an error response
      return new NextResponse(
        JSON.stringify({ message: "A event whith this name already exists" }),
        { status: 400 }
      );
    }

    // Create a new room object with the parsed data
    const data = new Event(json);
    console.log({ RoomCreated: data });

    // Save the Room object to the database
    const events = await data.save();

    // Return a NextResponse object with the saved room data and a 200 status code
    return new NextResponse(
      JSON.stringify(events), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log({ err });

    // If there is an error, return a NextResponse object with an error message and a 500 status code
    const error = {
      message: "Error Saving Rooms",
      error: err,
    };
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

export async function GET(request: Request, params: params) {

  const id = params.params.id;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return new NextResponse("Service not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(event), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function PUT(request: Request, params: params) {
  const id = params.params.id;
  const data = await request.json();
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);
  console.log({ userLogged: session });

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "admin") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

  try {
    const event = await Event.findByIdAndUpdate(id, data, { new: true });
    if (!event) {
      return new NextResponse("Service not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(event), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function DELETE(request: Request, params: params) {
  const id = params.params.id;
  const url = process.env.NEXTAUTH_URL as string;
  const session = await getServerSession(authOptions);
  console.log({ userLogged: session });

  if (session?.user.name === undefined) {
    return NextResponse.redirect(`${url}/account/login`);
  }

  if (session?.user.role !== "admin") {
    return NextResponse.json({ message: "no authorized" }, { status: 401 });
  }

  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return new NextResponse("Service not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(event), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), {
      status: 500,
    });
  }
}