import { Widget } from "rayous";

export function SVG(svg: string){
	return new Widget({element: {html: svg}});
}