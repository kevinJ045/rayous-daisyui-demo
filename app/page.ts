import { Button, Checkbox, Component, InputWrapper, List, ListItem, Radio, Text, Widget } from "rayous";
import * as Extra from "rayous/extra";
import "../styles/main.tail.css";
import { SVG } from "./svg";


class Stat extends Widget {
	constructor(options : { title: string, value: string, actions: Widget[] }){
		super({
			class: 'stat',
			children: [
				new Text(options.title, { class: 'stat-title' }),
				new Text(options.value, { class: 'stat-value' }),
				new Widget({ class: 'stat-actions', children: [
					...options.actions
				] }),
			]
		})
	}
}

export default class extends Component {
	build({ route: {} }) {
		return new Widget({ 
			class: 'max-w-mobile',
			children: [
				new Widget({
					class: 'join rounded-tm w-full bg-base-200',
					children: [
						new Widget({
							class: 'join-item pt-2 pl-4',
							children: [ SVG(`<svg class="h-7 w-7 text-primary"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>`) ]
						}),
						new InputWrapper({
							class: 'input w-full ml-2 bg-transparent join-item',
							title: 'Search'
						})
					]
				}),
				new Widget({
					class: 'rounded-bm w-full bg-base-200',
					children: [
						new Widget({
							class: 'stats w-full bg-transparent',
							children: [
								new Stat({
									title: "Account Balance",
									value: "$89,000",
									actions: [
										new Button('Add funds', {
											class: 'btn btn-sm btn-success'
										})
									]
								}),
								new Stat({
									title: "Saving balance",
									value: "$2,000",
									actions: [
										new Button('Deposit', {
											class: 'btn btn-sm btn-accent'
										}),
										new Button('Withdrawal', {
											class: 'btn ml-2 btn-sm btn-info'
										})
									]
								}),
							]
						}),
						new Widget({
							class: 'flex p-4 gap-4',
							children: [
								new Text('70%', {
									class: 'radial-progress bg-primary text-primary-content border-4 border-primary',
									style: { '--value': '70' }
								}),
								new Text("You're saving 70% better than last month, good progress!", {
									class: 'p-4 w-80'
								})
							]
						})
					]
				}),
				new List({
					element: { name: 'div' },
					class: 'p-4 overflow-auto max-h-80',
					items: [
						{
							title: "Deposit",
							content: "Deposited $500"
						},
						{
							title: "Withdraw",
							content: "Withdrawn $250",
							isGreen: true
						},
						{
							title: "Deposit",
							content: "Depositted $10"
						}
					],
					template(item){
						return new ListItem({
							element: { name: 'div' },
							class: 'card bg-base-200 my-2 shadow-xl',
							children: [
								new Widget({
									class: 'card-body',
									children: [
										new Widget({
											class: 'flex gap-5',
											children: [
												new Widget({
													children: [
														SVG(`<svg class="h-12 w-12 text-${item.isGreen ? 'success' : 'accent'}"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`)
													]
												}),
												new Widget({
													children: [
														new Text(item.title, {
															element: { name: 'h2' },
															class: 'card-title'
														}),
														new Text(item.content)
													]
												})
											]
										})
									]
								})
							]
						});
					}
				})
			] 
		});
	}
}