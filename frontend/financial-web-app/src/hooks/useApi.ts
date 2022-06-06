import { useEffect } from "react";
import { createWidget } from "../services/Auth";

// Hook
export async function useScript(src: any) {
  useEffect(
      () => {
        // Create script
        const node = document.createElement('script');
        node.src = src;
        node.type = 'text/javascript';
        node.async = true;
        node.onload = async() => {return await createWidget()};
        // Add script to document body
        document.body.appendChild(node);
      },
      [src] // Only re-run effect if script src changes
  )
}