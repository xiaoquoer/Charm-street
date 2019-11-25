module.exports = {
	baseUrl: './',
	outputDir: 'dist',
	lintOnSave: true,
	runtimeCompiler: true,
	configureWebpack: {
		resolve: {
			alias: {
				'components': '@/components',
				'content': 'components/content',
				'common': 'components/common',
				'assets': '@/assets',
				'network': '@/network',
				'views': '@/views',
			}
		}
	}
}
