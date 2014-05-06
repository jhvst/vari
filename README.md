vari
================
# visual illusion based captcha system

Vari (comes from Finnish word väri, which means colour) is a naive way to seperate dumb bots from clever bots (and humans).

The program flashes two colors (for example red and blue) at very high speed. What you would see instead of red and blue would be purple. Taking a computer screenshot would show the color to be either red or blue, but not purple. If the process could be crypted so that the colors could not be guessed, no bot should have an idea what color is actually displayed.

Have a look at example directory for a visual demo. You can run it with node and see the magic happen at localhost:8000.

As I said, this is naive implementation for number of reasons:

1. CSS hex colors can be solved with basic maths
2. There should be more than one color so screenshots could not be overlapped: implement some random factor which chooses color from pool of choices
3. There's this thing called color blindness (although I do have few friends who could help me!)
4. Currently the package uses only named CSS colors; some dedicated mind could just go trough each of the possible combinations of 147 colors and render this fine roadblock useless.
5. See the previous issue - some initial data would be needed if the colors are randomized. Although, something like reCAPTCHA implementation could work, where you have one challenge which result is known and one which is not.
6. Fluency in English may result in some variance with the naming of the colors - see issue #5
7. To make issue #5 and #6 even possible, a centralized challenge server (oh god) would be needed.

Luckily everything doesn't need to be webscale and serious business.