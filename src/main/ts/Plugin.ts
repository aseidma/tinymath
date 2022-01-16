import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('tinymath', {
    text: 'tinymath button',
    onAction: () => {
      editor.setContent('<p>content added from tinymath</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('tinymath', setup);
};
