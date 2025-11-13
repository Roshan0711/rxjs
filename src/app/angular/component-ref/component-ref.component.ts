import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TestComponent } from '../test/test.component';
@Component({
  selector: 'app-component-ref',
  templateUrl: './component-ref.component.html',
  styleUrls: ['./component-ref.component.scss']
})
export class ComponentRefComponent implements OnInit , AfterViewInit {
  @ViewChild('elem') elem! : ElementRef<any>;
  @ViewChild('tpl') tplRef! : TemplateRef<any> 
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  constructor(
    private elementRef : ElementRef,
    private vcr : ViewContainerRef,
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr : ChangeDetectorRef
    // private templateRef : TemplateRef<any>
    
    
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.elem.nativeElement.focus()
    this.vcr.createEmbeddedView(this.tplRef, { name: 'Roshan' });
    setTimeout(()=>{
      this.loadComponent();
      this.cdr.detectChanges(); 
    },1000)
    console.log();
  }

    loadComponent() {
    // Step 1: Create a factory for the dynamic component
    const factory = this.componentFactoryResolver.resolveComponentFactory(TestComponent);
    
    // Step 2: Clear the container (optional)
    this.container.clear();

    // Step 3: Create the component and insert into container
    const componentRef = this.container.createComponent(factory);

    // Step 4: Access the instance to set inputs
    componentRef.instance.someInput = 'Hello Dynamic!';
  }



}
