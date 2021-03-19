import { Injectable } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { Label } from './labels'

@Injectable({
  providedIn: 'root'
})
export class FeatureSearchService {

  quertBack:Label = new Label

  constructor() { }

  public queryGenerator(values:string[]){
    //hair
    if(values.indexOf('black') > -1){
      this.quertBack.hair = 'black'
    }
    if(values.indexOf('blond') > -1){
      this.quertBack.hair = 'blond'
    }
    if(values.indexOf('bald') > -1){
      this.quertBack.hair = 'bald'
    }
    if(values.indexOf('grey') > -1){
      this.quertBack.hair = 'grey'
    }
    if(values.indexOf('brown') > -1){
      this.quertBack.hair = 'brown'
    }
    //straightHair
    if(values.indexOf('straight') > -1){
      this.quertBack.straightHair= 'straightHair'
    }
    if(values.indexOf('wavy') > -1){
      this.quertBack.straightHair = 'wavyHair'
    }

    //bigLips
    if(values.indexOf('lipsy') > -1){
      this.quertBack.bigLips = 'yes'
    }else{
      this.quertBack.bigLips = 'no'
    }

    //bigNose
    if(values.indexOf('nosey') > -1){
      this.quertBack.bigNose = 'yes'
    }else{
      this.quertBack.bigNose = 'no'
    }

    //doubleChin
    if(values.indexOf('chiny') > -1){
      this.quertBack.doubleChin = 'yes'
    }else{
      this.quertBack.doubleChin = 'no'
    }

    //eyeGlasses
    if(values.indexOf('glassesy') > -1){
      this.quertBack.eyeGlasses = 'yes'
    }else{
      this.quertBack.eyeGlasses = 'no'
    }

    //male
    if(values.indexOf('male') > -1){
      this.quertBack.male = 'yes'
    }else{
      this.quertBack.male = 'no'
    }

    //beard
    if(values.indexOf('beardy') > -1){
      this.quertBack.beard= 'yes'
    }else{
      this.quertBack.beard = 'no'
    }

     //paleSkin
     if(values.indexOf('skiny') > -1){
      this.quertBack.paleSkin= 'yes'
    }else{
      this.quertBack.paleSkin = 'no'
    }

    //recedingHairline
    if(values.indexOf('recey') > -1){
      this.quertBack.recedingHairline= 'yes'
    }else{
      this.quertBack.recedingHairline = 'no'
    }

    //age
    if(values.indexOf('young') > -1){
      this.quertBack.age= 'young'
    }
    if(values.indexOf('old') > -1){
      this.quertBack.age= 'old'
    }

    return this.quertBack;
  }

}
