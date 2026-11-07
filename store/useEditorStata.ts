import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type EditorState = {
    // Define your state properties and methods here
    image: string | null;
    prompt: string;
    setImage: (imageData: string | null) => void;
    setPrompt: (prompt: string) => void;
    generateEdit: () => Promise<void>; 
    
}
export const useEditorStore = create<EditorState>()(
    devtools((set, get) => ({
        image: null,
        prompt: "",
        setImage: (imageData: string | null) =>
            set(() => ({ image: imageData })),
        setPrompt: (prompt: string) => set({ prompt }),
        generateEdit: async () => {
            const state = get();
            console.log("Prompt:", state.prompt);
            console.log("Image data:", state.image);
            // Implement your edit generation logic here
            const response = await fetch("/api/edit-image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    imageBase64: state.image,
                    prompt: state.prompt,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to generate edit");
            }
            const data = await response.json();
            console.log("Edit generated:", data);
            // Handle the response data as needed
        }
    })),
);