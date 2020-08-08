package com.rncodetest;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class GetKeyModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;


  GetKeyModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
    
  @Override
  public String getName() {
    return "GetKeyModule";
  }
  
    @ReactMethod
  public void getKey(
      Callback successCallback) {
      String key =getReactApplicationContext().getString(R.string.service_key);
      successCallback.invoke(key);
    
  }
}