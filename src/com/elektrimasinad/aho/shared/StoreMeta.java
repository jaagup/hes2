package com.elektrimasinad.aho.shared;

public class StoreMeta implements java.io.Serializable{
   public static final long serialVersionUID=1L;
   private String key;
   private String parent;
   private String value;
   
   public void setKey(String key) {this.key=key;}
   public String getKey() {return key;}
   public void setParent(String parent) {this.parent=parent;}
   public String getParent() {return parent;}
   public void setValue(String value) {this.value=value;}
   public String getValue() {return value;}
}
