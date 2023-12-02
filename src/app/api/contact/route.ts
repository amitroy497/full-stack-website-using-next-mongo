import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { Contact } from '@/models/contact';
import { connectionStr } from '@/utils/db';
import dbConn from '@/utils/dbConn';

export async function POST(request: any) {
	try {
		const payload = await request.json();
		await mongoose.connect(connectionStr);
		let contact = new Contact(payload);
		const result = await contact.save();
		return NextResponse.json({
			result,
			message: 'Message sent successfully!',
			success: true,
			status: 200,
		});
	} catch (e) {
		return NextResponse.json({
			message: 'Server error, please try again!',
			success: false,
			status: 500,
		});
	}
}
