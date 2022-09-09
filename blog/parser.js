import { marked } from 'marked'

export default {
    name: 'parser',
    data() {
        return {
            markdown: '# hello world',
        };
    },
    computed: {
        markdownToHtml() {
            return marked(this.markdown);
        },
    },
};