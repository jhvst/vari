vari
================
## a naive visual illusion based captcha system

Vari is a naive way to seperate dumb bots from clever bots (and humans). The idea is to have effortless and rather unique way of getting rid of annoyances with pre-script bots. So basically a roadblock for any hacker who wants to use your online service. That's what people love, after all, some challenge for being (questionable) ingenious.

Currently under work-in-progress, so things are sure to change. Anyway, here is briefly the idea of the whole thing:

The program flashes two colors at very high speed, lets say for example, red and blue. The color could be either CSS or just an image file, but the image is supposed to change at rate of something like 15ms. What this results in is a visual illusion in humans seeing neither blue or red, but rather purple. Now, taking a computer screenshot would render the page to have either red or blue element, but more importantly, not purple. If the colors are randomly selected or inserted to page via image, the source code should not give a clue what color the visual illusion one is.

As I said, this is naive implementation for number of reasons:

1. CSS hex colors can be solved with basic maths
2. There should be more than one color so screenshots could not be overlapped: implement some random factor which chooses color from pool of choices
3. There's this thing called color blindness (although I do have few friends who could help me!)
4. Currently the package uses only named CSS colors; some dedicated mind could just go trough each of the possible combinations of 147 colors and render this fine roadblock useless.
5. See the previous issue - some initial data would be needed if the colors are randomized. Although, something like reCAPTCHA implementation could work, where you have one challenge which result is known and one which is not.
6. Fluency in English may result in some variance with the naming of the colors - see issue #5
7. To make issue #5 and #6 even possible, a centralized challenge server (oh god) would be needed.

Luckily everything doesn't need to be webscale and serious business.


Licensed under MIT for so long that I find something that fits better (see WTFPL).