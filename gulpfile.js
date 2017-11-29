var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var reactEasy = require('gulp-react-easy');
var rupture = require('rupture');
var stylus = require('gulp-stylus');

//Seta tasks que serão chamadas no início da execução do gulp
gulp.task('default', ['js', 'w', 'comp-stylus']);

//Adiciona tarefa de watcher
gulp.task('w', function () {
	//assite alterações no diretório /src/js e subdiretórios e se houver alguma alteração executa a task 'js'
	gulp.watch('./src/js/**/*', ['js']);
	gulp.watch('./stylus/**/*.styl', ['comp-stylus'])
});

//Task de compilação de stylus
gulp.task('comp-stylus', function(){
	var options = {
		//plugins usados com o stylus
        use: [ rupture() ]
    };
	
	gulp.src('./stylus/general.styl')//arquivo principal do stylus
        .pipe(stylus(options))
        .pipe(rename('general.css'))//nome do arquivo compilado
        .pipe(gulp.dest('./dist/css/')); //destino do arquivo compilado
});

//task 'js'
gulp.task('js', function () {
	//gera a compilação do fonte em react
	return reactEasy({
			file: './src/js/app.jsx', //arquivo jsx a ser compilado/gerado
			debug: true // optional, false by default
		})
		.to('app.js')
		.pipe(gulp.dest('./dist/js/'));
});