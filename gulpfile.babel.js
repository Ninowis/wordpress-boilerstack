import { src, dest, task, watch } from 'gulp'
import { exec } from 'child_process'
import copydir from 'copy-dir'
import fs from 'fs'
import replace from 'gulp-replace'
import zip from 'gulp-zip'
import {} from 'colors'
import {} from 'dotenv/config'

const
  THEME_NAME = process.env.THEME_NAME,
  THEME_PATH = process.env.THEME_PATH,
  THEME_TEXT_DOMAIN = process.env.THEME_TEXT_DOMAIN

task('create', (done) => {
  if (fs.existsSync(THEME_PATH)) {
    console.log('\n  Theme already exists, skipping creation.\n\n'.yellow)
    done()
  } else {
    console.log('\n  Creating new '.green + THEME_NAME.yellow + ' theme...'.green)
    copydir('src/twentynineteen', THEME_PATH, () => {
      console.log('\n  > TwentyNineteen theme copied into '.green + THEME_PATH.yellow + ' folder.'.green)
      return src([
          THEME_PATH + '/package.json',
          THEME_PATH + '/**/*.js',
          THEME_PATH + '/**/*.php',
          THEME_PATH + '/**/*.scss'
        ])
        .pipe(replace('Twenty Nineteen', THEME_NAME))
        .pipe(replace('twentynineteen', THEME_TEXT_DOMAIN))
        .pipe(dest(THEME_PATH))
        .on('end', () => {
          console.log("  > Finished renaming the theme's classes and functions.\n\n".green)
          done()
        })
    })
  }
});

task('build', (done) => {
  console.log('\n  Building '.green + THEME_NAME.yellow + ' theme...'.green)
  console.log('\n  > Installing theme package dependencies...\n'.green)
  exec('cd ' + THEME_PATH + ' && npm install', (err, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr.red)
    if (err) {
      console.log( err
        ? '  > Packages installed with error: '.red + err.red
        : '\n  > Packages installed. '.green
      )
    }
    console.log('\n  > Compiling theme assets... '.green)
    exec('cd ' + THEME_PATH + ' && npm run build', (err, stdout, stderr) => {
      console.log(stdout.yellow)
      console.log(stderr.red)
      if (err) {
        console.log( err
          ? '  > Error compiling theme: '.red + err.red
          : '  > Theme assets compiled.\n'.green
        )
      }
      done(err)
    })
  })
});

task('zip', () => {
  return src([
      THEME_PATH + '/**/*',
      '!' + THEME_PATH + '/node_modules{,/**}',
      '!' + THEME_PATH + '/sass{,/**}',
      '!' + THEME_PATH + '/**/*.scss',
      '!' + THEME_PATH + '/**/*.git',
    ])
    .pipe(zip(THEME_TEXT_DOMAIN + '.zip'))
    .pipe(dest('dist'));
});

task('update', () =>  {
  return src([
      THEME_PATH + '/**/*',
      '!' + THEME_PATH + '/node_modules{,/**}',
      '!' + THEME_PATH + '/sass{,/**}',
      '!' + THEME_PATH + '/**/*.scss',
      '!' + THEME_PATH + '/**/*.git',
    ])
    .pipe(dest('wp-content/themes/' + THEME_TEXT_DOMAIN));
});

task('watch', () => {
	watch([
      THEME_PATH + '/**/*.css',
      THEME_PATH + '/**/*.js',
      THEME_PATH + '/**/*.php',
		], ['update']);
});