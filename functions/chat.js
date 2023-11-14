import OpenAI from "openai";

export default async (request, context) => {
    try {
        const openai = new OpenAI(process.env.OPENIA_API_KEY);

        const completion = await openai.chat.completions.create({
            messages: [{ "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": "Who won the world series in 2020?" },
            { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
            { "role": "user", "content": "Where was it played?" }],
            model: "gpt-3.5-turbo",
        });

        const data = completion.choices[0];

        return Response.json({ data });
    } catch (error) {
        console.log(error);
        return Response.json({ error: 'Failed fetching data' }, { status: 500 });
    }
};
