// conclean is simple and easy to use windows , linux and mac os clear console module
/**
 * Cross platform clear console.
 *
 * Platform: macOS, Windows, and Linux.
 *
 * @author sumangal karan <https://github.com/sumangal44>
 */
export default () => process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
