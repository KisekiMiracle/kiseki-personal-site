import type { APIRoute } from "astro";
import { Resend } from "resend";
import GooglePlayPolicyUpdateEmail from "../../emails/sampleEmail";
import { render } from "@react-email/render";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
	const emailContent = GooglePlayPolicyUpdateEmail();
	const html = await render(emailContent);
	const text = await render(emailContent, {
		plainText: true,
	});

	const { data, error } = await resend.emails.send({
		from: "Kiseki <noreply@info.kiseki-miracle.dev>",
		to: ["luisazaldegui99@gmail.com"],
		subject: "Testing",
		html,
		text,
	});

	if (error) return new Response(JSON.stringify(error));
	return new Response(JSON.stringify(data));
};
