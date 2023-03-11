import { container } from 'tsyringe';
import * as glob from 'glob';
import * as path from 'path';

// Modüllerin bulunduğu klasörün yolu
const moduleFolder = './modules';

// Tüm modül klasörlerini alın
const modules = glob.sync(`${moduleFolder}/*`);

// Her modül klasörü için
for (const module of modules) {
  // Servislerin klasörünü alın
  const services = glob.sync(`${module}/services/*.service.ts`);

  // Her servis için
  for (const service of services) {
    // Servis sınıfını yükle
    const ServiceClassPromise = import(path.resolve(service)).then((module) => module.default);

    // Servis sınıfını container'a kaydet
    ServiceClassPromise.then(ServiceClass => {
        console.log(ServiceClass.name);
        container.register(ServiceClass.name, { useClass: ServiceClass });
    });
  }

  // Repositories klasörünü alın
  const repositories = glob.sync(`${module}/repositories/*.repository.ts`);

  // Her repository için
  for (const repository of repositories) {
    // Repository sınıfını yükle
    const RepositoryClassPromise = import(path.resolve(repository)).then((module) => module.default);

    // Repository sınıfını container'a kaydet
    RepositoryClassPromise.then(RepositoryClass => {
        container.register(RepositoryClass.name, { useClass: RepositoryClass });
    });
  }

  // Controllers klasörünü alın
  const controllers = glob.sync(`${module}/controllers/*.controller.ts`);

  // Her controller için
  for (const controller of controllers) {
    // Controller sınıfını yükle
    const ControllerClassPromise = import(path.resolve(controller)).then((module) => module.default);

    // Controller sınıfını container'a kaydet
    ControllerClassPromise.then(ControllerClass => {
        container.register(ControllerClass.name, { useClass: ControllerClass });
    });
  }
}

export { container };
