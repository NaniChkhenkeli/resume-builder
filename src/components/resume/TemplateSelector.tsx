
import { useResume } from '@/contexts/ResumeContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const TemplateSelector = () => {
  const { state, dispatch } = useResume();

  const handleTemplateChange = (template: 'professional' | 'minimalist' | 'modern' | 'creative') => {
    dispatch({
      type: 'SET_TEMPLATE',
      payload: template
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Resume Template</h3>
      <Tabs 
        defaultValue={state.template} 
        onValueChange={(value) => handleTemplateChange(value as 'professional' | 'minimalist' | 'modern' | 'creative')}
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="minimalist">Minimalist</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
          <TabsTrigger value="creative">Creative</TabsTrigger>
        </TabsList>
        
        <TabsContent value="professional">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-[210/297] bg-gray-100 rounded border border-gray-200 p-2 flex flex-col">
                <div className="bg-resume-primary h-12 mb-3"></div>
                <div className="space-y-2">
                  <div className="bg-gray-300 h-6 w-1/2 mb-4"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                  <div className="bg-gray-200 h-3 w-3/4"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-gray-300 h-4 w-1/3"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-gray-300 h-4 w-1/3"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                </div>
              </div>
              <p className="text-center mt-2 text-sm">Professional Template</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="minimalist">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-[210/297] bg-gray-100 rounded border border-gray-200 p-2 flex flex-col">
                <div className="space-y-2">
                  <div className="bg-gray-300 h-6 w-1/2 mb-4"></div>
                  <div className="border-b border-gray-300 pb-2"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-gray-300 h-4 w-1/3"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-gray-300 h-4 w-1/3"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                  <div className="bg-gray-200 h-3 w-full"></div>
                </div>
                <div className="flex-1"></div>
                <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between">
                  <div className="bg-gray-200 h-3 w-1/4"></div>
                  <div className="bg-gray-200 h-3 w-1/4"></div>
                  <div className="bg-gray-200 h-3 w-1/4"></div>
                </div>
              </div>
              <p className="text-center mt-2 text-sm">Minimalist Template</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="modern">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-[210/297] bg-gray-100 rounded border border-gray-200 p-2 flex flex-col">
                <div className="flex h-full">
                  <div className="w-1/3 bg-resume-accent p-2">
                    <div className="bg-white/20 h-10 w-full mb-3"></div>
                    <div className="bg-white/20 h-3 w-5/6 mb-2"></div>
                    <div className="bg-white/20 h-3 w-4/6 mb-4"></div>
                    <div className="bg-white/20 h-4 w-5/6 mb-2"></div>
                    <div className="bg-white/20 h-3 w-4/6"></div>
                  </div>
                  <div className="w-2/3 p-2">
                    <div className="bg-gray-300 h-4 w-2/3 mb-2"></div>
                    <div className="bg-gray-200 h-2 w-full mb-1"></div>
                    <div className="bg-gray-200 h-2 w-full mb-4"></div>
                    <div className="bg-gray-300 h-4 w-1/2 mb-2"></div>
                    <div className="bg-gray-200 h-2 w-full mb-1"></div>
                    <div className="bg-gray-200 h-2 w-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-2 text-sm">Modern Template</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="creative">
          <Card>
            <CardContent className="p-4">
              <div className="aspect-[210/297] bg-gray-100 rounded border border-gray-200 p-2 flex flex-col">
                <div className="bg-gradient-to-r from-resume-primary to-resume-accent h-16 mb-3 rounded-t p-2">
                  <div className="bg-white/20 h-4 w-1/2 mb-1"></div>
                  <div className="bg-white/20 h-3 w-1/3"></div>
                </div>
                <div className="p-2">
                  <div className="space-y-2 mb-3">
                    <div className="h-4 w-1/3 bg-resume-primary mb-1"></div>
                    <div className="h-2 w-full bg-gray-200"></div>
                    <div className="h-2 w-full bg-gray-200"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-1/3 bg-resume-primary mb-1"></div>
                    <div className="h-2 w-full bg-gray-200"></div>
                    <div className="h-2 w-full bg-gray-200"></div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-2 text-sm">Creative Template</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TemplateSelector;
