# Silent Image Load Failure in Expo's Image Component

This repository demonstrates a bug where Expo's `Image` component silently fails to load large or complex images without providing any error messages.  The console remains clear, making debugging challenging.

## Problem

The problem is that when using a remote image URI that is very large or complex, the `Image` component from Expo may fail to load the image without any indication of failure. This happens even when the image is available at the URI and the network is functioning correctly. The lack of any error message or warning makes it difficult to identify the issue.  This is frequently caused by either network timeout issues or internal limits within Expo's image handling logic.

## Solution

The proposed solution uses a combination of error handling and a fallback mechanism to gracefully handle potential image load failures.  This solution provides visual feedback to the user and offers a way to diagnose and address the root cause.

## Setup

Clone the repository and run `npm install` or `yarn install` to install the required dependencies.

Then, run the app using `expo start`. 