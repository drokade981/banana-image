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
            
        }
    })),
);