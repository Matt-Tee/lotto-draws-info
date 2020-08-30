# Open Lottery Info App

## Purpose

The purpose behind building this app was to have some publicly visible piece of work to demonstrate the quality of react-native work that I could achieve in a tight time-frame. The requirements of this project were as follows:

- Hit a publicly available end point for a set of data
- Display said data in a meaningful way
- Integrate at least one feature unique to react-native
- Include at least two unit test
- Make a decent README

I gave myself about 3/4 of a day to complete the above requirements.

## Running The App

To run this app locally just clone down the repository and run the following code in the directory depending on your preferred package manager:

##### NPM

    npm install
    npm start

##### Yarn

    yarn
    yarn start

Alternatively if you just want to have a look at the app but don't want to run it locally you can find it at https://expo.io/@matt-tee/lotto-draws-info.

Either way, you are going to need the Expo App to scan the QR Code that is now in front of you. Just download it to your phone from either the Google-play or Apple stores, it's free! Once you have just scan the QR Code and it will do the rest for you.

### Unit Tests

I only included the minimum two unit test required due to time constraints. I probably would have done some test driven development except that I couldn't make up my mind how the end result should function. It was only about three quarters of the way through that I actually finalized the general layout/functionality. Since I used typescript with this project and it was a very simple project, I would consider tests to almost be pointless in this case.

### Logos

For those who decided to dig around my code, you are probably wondering why I didn't just use the URLs that came with each lotto draw data to display the appropriate logo. Originally I had intended to do just that but while I was looking at their documentation, I discovered that those urls are now deprecated. Proof: https://media.thelott.com/documentations/IData/DataTypes/OpenLotteriesDraw.html
So I just downloaded some publicly available versions of those assets and used the product IDs as keys to determine which logo to display.

### In-App QRCode Scanner

The app has a QRCode scanner built into it. With the limited functionality that app possesses, there really isn't much need for it but I included it to meet the requirements set above. Below I have some QRCodes that will only function if you scan them with the app. Doing so should navigate you to the appropriate pages.

##### Powerball

![Powerball QRCode](./assets/powerBallQR.jpg)

##### OzLotto

![OzLotto QRCode](./assets/ozLottoQR.jpg)
