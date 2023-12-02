'use server';
import mongoose from 'mongoose';

import { Contact } from '@/models/contact';
import { connectionStr } from '@/utils/db';

interface SubmitContactPropsTypes {
	username: any;
	email: any;
	phone: any;
	message: any;
}
export const submitContact = async (payload: SubmitContactPropsTypes) => {
	try {
		await mongoose.connect(connectionStr);
		let contact = new Contact(payload);
		const result = await contact.save();
		return {
			result,
			message: 'Message sent successfully!',
			success: true,
			status: 200,
		};
	} catch (err) {
		return {
			message: 'Server error, please try again!',
			success: false,
			status: 500,
		};
	}
};
