import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: "ib7oo3dsddyd",
        accessToken: "Ib5v5nLUUhOWmu6-8_ibWDUn126dWJjtHqUqwue4b8E"
    })

    const getData = async() => {
        try {
            const teacherResponse = await client.getEntries({ content_type: "teachers" });
            const teacherSanitizedResponse = teacherResponse.items.map(item => {
                const img = item.fields.image.fields.file.url;
                return {
                    ...item.fields,
                    img,
                }
            })
            const blogResponse = await client.getEntries({ content_type: "blog" });
            const blogSanitizedResponse = blogResponse.items.map(item => {
                const img = item.fields.image.fields.file.url;
                return {
                    ...item.fields,
                    img,
                }
            })
            const testimonialResponse = await client.getEntries({ content_type: "testimonial" });
            const testimonialSanitizedResponse = testimonialResponse.items.map(item => {
                return {
                    ...item.fields,
                }
            })
            return {
                teacherSanitizedResponse,
                blogSanitizedResponse,
                testimonialSanitizedResponse,
            }
        } catch (error) {
            console.log(error);
        }
    };
    return {getData};

}

export default useContentful;