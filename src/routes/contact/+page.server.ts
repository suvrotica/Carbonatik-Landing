// src/routes/contact/+page.server.ts
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const company = data.get('company');
        const email = data.get('email');
        const interest = data.get('interest');

        // Basic validation
        if (!email || !company) {
            return fail(400, { missing: true });
        }

        // In a real app, you would send an email or save to DB here
        console.log(`Partnership Inquiry from ${company} (${email}) regarding ${interest}`);

        return { success: true };
    }
} satisfies Actions;