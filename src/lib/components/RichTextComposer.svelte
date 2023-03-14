<script>
	import {
		Composer,
		ContentEditable,
		ToolbarRichText,
		ActionBar,
		RichTextPlugin,
		HistoryPlugin,
		ListPlugin,
		CheckListPlugin,
		HorizontalRulePlugin,
		ImagePlugin
	} from 'svelte-lexical';
	import {
		HeadingNode,
		QuoteNode,
		ListNode,
		ListItemNode,
		HorizontalRuleNode,
		ImageNode
	} from 'svelte-lexical';
	import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
	import SubmitButton from './bulletin/SubmitButton.svelte';
	import {
		$getRoot as getRoot,
		$createTextNode as createTextNode,
		$createParagraphNode as createParagraphNode
	} from 'svelte-lexical';
	var visible = false;
	const initialConfig = {
		theme: PlaygroundEditorTheme,
		nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, HorizontalRuleNode, ImageNode],
		onError: (error) => {
			throw error;
		},
		editorState: () => {
			const root = getRoot();
			if (root.getFirstChild() !== null) {
				visible = false;
			} else {
				visible = true;
			}
		}
	};
</script>

<Composer {initialConfig}>
	<div class="editor-shell">
		<ToolbarRichText />
		<div class="editor-container">
			<div class="editor-scroller">
				<div class="editor">
					<ContentEditable />
				</div>
			</div>
			<RichTextPlugin />
			<HistoryPlugin />
			<ListPlugin />
			<CheckListPlugin />
			<HorizontalRulePlugin />
			<ImagePlugin />
			<SubmitButton />
		</div>
	</div>
</Composer>
